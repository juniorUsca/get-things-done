//
//  SplashView.swift
//  DAWA
//
//  Created by drandredev on 6/15/21.
//  Copyright © 2021 drandredev. All rights reserved.
//
//
import SwiftUI

struct SplashView: View {
    @State var isActive:Bool = false

    
    var body: some View {
        VStack {
                ZStack {
                    Color(UIConfiguration.backgroundColor)
                        .edgesIgnoringSafeArea(.all)
                    Image("logo")
                        .resizable()
                        .frame(width: 280, height: 90, alignment: .center)
                }
            
        }
        .onAppear {
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
                withAnimation {
                    self.isActive = true
                }
            }
        }
    }
}
