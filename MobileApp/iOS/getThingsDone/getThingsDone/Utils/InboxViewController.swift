//
//  InboxViewController.swift
//  getThingsDone
//
//  Created by Mac 03 on 6/27/21.
//  Copyright © 2021 deah. All rights reserved.
//

import UIKit

class InboxTableViewCell:UITableViewCell{
    @IBOutlet weak var txtDescripcion: UILabel!
    @IBOutlet weak var txtNumero: UILabel!
    @IBOutlet weak var txtFecha: UILabel!
    @IBOutlet weak var txtTitle: UILabel!
}

class InboxViewController: UIViewController,UITableViewDelegate, UITableViewDataSource {
    @IBAction func editDoneButton(_ sender: Any) {
        if tablaInbox.isEditing{
            tablaInbox.isEditing = false
        }
        else{
            tablaInbox.isEditing = true
        }
    }
    
    @IBOutlet weak var tablaInbox: UITableView!
    var inboxs:[Inbox] = []
    override func viewDidLoad() {
        super.viewDidLoad()
        tablaInbox.delegate = self
        tablaInbox.dataSource = self
        cargarInbox(){
            self.tablaInbox.reloadData()
            
        }
        tablaInbox.isEditing = false
    }

    @IBAction func addTapped(_ sender: Any) {
        performSegue(withIdentifier: "añadirInboxSegue", sender: nil)
    }
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if inboxs.count == 0 {
            return 1
        }else{
            return inboxs.count
        }
    }
    
    func tableView(_ tableView: UITableView, moveRowAt sourceIndexPath: IndexPath, to destinationIndexPath: IndexPath) {
        let movedObject = self.inboxs[sourceIndexPath.row]
        inboxs.remove(at: sourceIndexPath.row)
        inboxs.insert(movedObject, at: destinationIndexPath.row)
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = UITableViewCell()
        if inboxs.count == 0{
            cell.textLabel?.text = "No hay nada todavia"
        }else{
            let date = inboxs[indexPath.row].created_at!
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "YY/MM/dd"
            let fecha = dateFormatter.string(from: date)
            let cellIn = tableView.dequeueReusableCell(withIdentifier: "inboxCell", for: indexPath) as! InboxTableViewCell
            cellIn.txtDescripcion.text = inboxs[indexPath.row].descripcion
            cellIn.txtTitle.text = "Inbox #"+String(indexPath.row+1)
            cellIn.txtFecha.text =  fecha
            cellIn.txtNumero.text = String(indexPath.row+1)
            if !inboxs[indexPath.row].activo{
                cellIn.txtNumero.backgroundColor = UIColor.red
            }
            cellIn.txtNumero.layer.cornerRadius = 5
            return cellIn
        }
        
        return cell
    }
    func cargarInbox(completed: @escaping () -> ()) {
        let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
        do{
            inboxs = try context.fetch(Inbox.fetchRequest()) as! [Inbox]
        }catch{
            print("Error al leer entidad de CoreData")
        }
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let siguienteVC = segue.destination as! An_adirInboxViewController
        siguienteVC.anteriorVC = self
    }
}
