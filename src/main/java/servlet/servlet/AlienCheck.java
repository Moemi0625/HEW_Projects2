package servlet.servlet;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Alien;
import model.AlienCheckLogic;

@WebServlet("/AlienCheck")
public class AlienCheck extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // フォワード
        RequestDispatcher dispatcher = request.getRequestDispatcher
                ("/alienCheck.jsp");
        dispatcher.forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	request.setCharacterEncoding("UTF-8");
        // フォームからのデータ取得
        String name = request.getParameter("name");
        int age = Integer.parseInt(request.getParameter("age"));
        int language = Integer.parseInt(request.getParameter("language"));
        int skinColor = Integer.parseInt(request.getParameter("skinColor"));

        // Alienオブジェクトの作成
        Alien alien = new Alien();
        alien.setName(name);
        alien.setAge(age);
        alien.setLanguage(language);
        alien.setSkinColor(skinColor);

        // AlienCheckLogicを使って診断
        String result = AlienCheckLogic.checkAlien(alien);

        // ランダムな数値を生成
        Random random = new Random();
        int level = random.nextInt(101); // 0 〜 100のランダムな数

        // 現在の日付を取得
        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String diagnosisDate = "2230-" + dateFormat.format(currentDate).substring(5);

        // 診断結果をリクエスト属性に設定
        request.setAttribute("result", result);
        
        // レベルをリクエスト属性に設定
        request.setAttribute("level", level);

        // 診断日付をリクエスト属性に設定
        request.setAttribute("diagnosisDate", diagnosisDate);

        // JSPにフォワード
        RequestDispatcher dispatcher = request.getRequestDispatcher
                ("/alienCheckResult.jsp");
        dispatcher.forward(request, response);
    }
}
