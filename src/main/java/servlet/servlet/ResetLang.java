package servlet.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/resetLanguage")
public class ResetLang extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession(false);  // セッションを取得（存在しない場合は null）

        if (session != null) {
            // セッションが存在する場合はセッションを無効にする
            session.invalidate();
        }

        // top.html にリダイレクト
        response.sendRedirect("top.html");
    }
}
