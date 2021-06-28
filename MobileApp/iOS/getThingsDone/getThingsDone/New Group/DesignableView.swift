//
//  DesignableView.swift
//  getThingsDone
//
//  Created by Mac 17 on 6/15/21.
//  Copyright © 2021 deah. All rights reserved.
//

import UIKit

@IBDesignable
class DesignableView: UIView { // Propiedades para estilo de View en Storyboard
    @IBInspectable var shadowColor: UIColor = UIColor.clear {
        didSet {
            layer.shadowColor = shadowColor.cgColor
        }
    }

    @IBInspectable var shadowRadius: CGFloat = 0 {
        didSet {
            layer.shadowRadius = shadowRadius
        }
    }

    @IBInspectable var shadowOpacity: CGFloat = 0 {
        didSet {
            layer.shadowOpacity = Float(shadowOpacity)
        }
    }

    @IBInspectable var shadowOffsetY: CGFloat = 0 {
        didSet {
            layer.shadowOffset.height = shadowOffsetY
        }
    }
}
