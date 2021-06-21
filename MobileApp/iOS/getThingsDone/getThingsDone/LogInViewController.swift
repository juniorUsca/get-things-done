//
//  ViewController.swift
//  getThingsDone
//
//  Created by Mac 17 on 6/15/21.
//  Copyright © 2021 deah. All rights reserved.
//

import UIKit
import Firebase
import FirebaseAuth

class LogInViewController: UIViewController {

    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        
    }
    
    @IBAction func logIn(_ sender: Any) {
        if let email = emailTextField.text, let password = passwordTextField.text {
            Auth.auth().signIn(withEmail: email, password: password) { (result, error) in
                self.showHome(result: result, error: error, typeAuth: "Correo y contraseña")
            }
        }
    }
    
    private func showHome(result: AuthDataResult?, error: Error?, typeAuth: String) {
        if let result = result, error == nil {
            UserDefaults.standard.set(result.user.email!, forKey: "username")
            self.performSegue(withIdentifier: "homeSegue", sender: nil)
        } else {
            self.showAlert("Error", "Usuario incorrecto, intentelo de nuevo")
        }
    }
    
    func showAlert(_ title: String, _ message: String) {
        let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
        
        alert.addAction(UIAlertAction(title: "Aceptar", style: .cancel, handler: { (action) in
            
        }))
        
        present(alert, animated: true, completion: nil)
    }

}

