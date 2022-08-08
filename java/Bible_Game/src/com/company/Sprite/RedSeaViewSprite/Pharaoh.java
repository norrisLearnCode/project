package com.company.Sprite.RedSeaViewSprite;

import com.company.Sprite.Sprite;

import javax.swing.*;

public class Pharaoh extends Sprite {

    public Pharaoh(int x, int y) {
        setPosition(x,y);
        img = new ImageIcon("pharaoh.png");
    }

    @Override
    public String overlap(int x, int y) {
        return null;
    }
}
