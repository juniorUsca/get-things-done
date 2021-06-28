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
            cell.textLabel?.text = inboxs[indexPath.row].description
        }
        
        return cell
    }
    func cargarInbox(completed: @escaping () -> ()) {
        let url = URL(string: "http://localhost:3001/api/inbox/all")
        URLSession.shared.dataTask(with: url!){
            (data,response,error) in
            if error == nil{
                do{
                    self.inboxs = try JSONDecoder().decode([Inbox].self,from:data!)
                    DispatchQueue.main.async{
                        completed()
                    }
                }catch{
                    print("Error en JSON")
                }
            }
        }.resume()
    }
}
