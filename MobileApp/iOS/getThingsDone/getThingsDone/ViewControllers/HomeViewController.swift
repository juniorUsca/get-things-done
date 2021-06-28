//
//  HomeViewController.swift
//  getThingsDone
//
//  Created by Mac 17 on 6/15/21.
//  Copyright © 2021 deah. All rights reserved.
//

import UIKit
import FirebaseAuth

class HomeViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // let user = UserDefaults.standard.string(forKey: "username")
        // usernameLabel.text = user
        
    }
    
    @IBAction func InboxTapped(_ sender: Any) {
        self.performSegue(withIdentifier: "inboxSegue", sender: nil)
    }
    @IBAction func closeSession(_ sender: Any) {
        
        UserDefaults.standard.removeObject(forKey: "username")
        
        do {
            try Auth.auth().signOut()
            dismiss(animated: true, completion: nil)
        } catch {
            print("Se generó un error")
        }
    }
    

}
