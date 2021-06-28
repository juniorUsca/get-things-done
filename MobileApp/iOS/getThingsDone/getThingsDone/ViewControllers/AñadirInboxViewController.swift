//
//  AñadirInboxViewController.swift
//  getThingsDone
//
//  Created by Mac 03 on 6/27/21.
//  Copyright © 2021 deah. All rights reserved.
//

import UIKit

class An_adirInboxViewController: UIViewController {

    @IBOutlet weak var txtDescripcion: UITextField!
    @IBOutlet weak var spnActivo: UISwitch!
    var anteriorVC:InboxViewController?
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    @IBAction func añadirTapped(_ sender: Any) {
        if txtDescripcion.text!.count > 4{
            
            let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
            var inbox = Inbox(context: context)
            inbox.activo = spnActivo.isOn
            inbox.descripcion = txtDescripcion.text!
            inbox.created_at = Date()
            (UIApplication.shared.delegate as! AppDelegate).saveContext()
            anteriorVC?.inboxs.append(inbox)
            anteriorVC?.tablaInbox.reloadData()
            navigationController?.popViewController(animated: true)
        }
    }
}
