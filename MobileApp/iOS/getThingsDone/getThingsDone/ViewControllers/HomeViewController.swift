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
    
    @IBAction func closeSession(_ sender: Any) {
        
        UserDefaults.standard.removeObject(forKey: "username")
        
        do {
            try Auth.auth().signOut()
            dismiss(animated: true, completion: nil)
        } catch {
            print("Se generó un error")
        }
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
