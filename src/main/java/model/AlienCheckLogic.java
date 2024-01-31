package model;

public class AlienCheckLogic {
    public static String checkAlien(Alien alien) {
        // バリデーション
        if (alien.getName() == null || alien.getAge() == 0 || alien.getLanguage() == 0 || alien.getSkinColor() == 0) {
            return "全ての項目に回答してください。";
        }

        // 合計点数の計算
        int totalPoints = alien.getAge() + alien.getLanguage() + alien.getSkinColor();


        // 診断結果の生成
        if (totalPoints == 9) {
            return "まさかの「" + alien.getName() + "」は宇宙人によって洗脳され、"
            		+ "あたかも自身が宇宙人だと認識している人間のようです";
        } else if (totalPoints == 5) {
            return "遠い宇宙出身の「" + alien.getName() + "」は充実した地球ライフを満喫できる"
            		+ "正真正銘の宇宙人のようです";
        } else if (totalPoints == 7) {
            return "地球に人一倍ロマンを抱いている「" + alien.getName() + "」は人間に誘拐される"
            		+ "確率がほぼ100％の宇宙人です";
        } else if (totalPoints == 3) {
            return "一般人のような言動が身に染み込んだ「" + alien.getName() + "」は、"
            		+ "地球で人間の社会に揉まれた、ほぼ人間みたいな宇宙人です";
        } else if (totalPoints == 10){
            return "「" + alien.getName() + "」は任務適正云々の前に実体を獲得する必要があります";
        }else if (totalPoints == 6){
            return "「" + alien.getName() + "」は地球に行くとすぐに宇宙人だとばれてしまうので、"
            		+ "あまりおススメしません";
        }else if (totalPoints == 8){
            return "「" +  alien.getName() + "」は任務なんていいから宇宙に"
            		+ "籠っていたいと駄々をこねるニートな宇宙人ですね";
        }else if (totalPoints == 4){
            return "「" + alien.getName() + "」は宇宙人としての任務を放棄し、"
            		+ "地球で遊び惚けてしまうようです";
        }  else {
            return "診断できませんでした。";
        }
    }
}
