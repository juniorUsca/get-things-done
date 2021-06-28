//
//  InboxViewController.swift
//  getThingsDone
//
//  Created by Mac 03 on 6/27/21.
//  Copyright © 2021 deah. All rights reserved.
//

import UIKit

class InboxViewController: UIViewController,UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var tablaInbox: UITableView!
    var inboxs:[Inbox] = []
    override func viewDidLoad() {
        super.viewDidLoad()
        tablaInbox.delegate = self
        tablaInbox.dataSource = self
        cargarInbox(){
            self.tablaInbox.reloadData()
        }
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
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = UITableViewCell()
        if inboxs.count == 0{
            cell.textLabel?.text = "No hay nada todavia"
        }else{
            cell.textLabel?.text = inboxs[indexPath.row].descripcion
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
