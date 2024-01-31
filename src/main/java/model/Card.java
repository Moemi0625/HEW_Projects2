package model;

import java.io.Serializable;

public class Card implements Serializable {
    private String country;
    private boolean flipped;

    public Card() {
        // デフォルトコンストラクタ
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public boolean isFlipped() {
        return flipped;
    }

    public void setFlipped(boolean flipped) {
        this.flipped = flipped;
    }
}
