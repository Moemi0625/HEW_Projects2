package servlet.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/translate")
public class LangCheck extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String language = request.getParameter("language");

        // ボタン以外のアクセスの場合はエラーページにリダイレクト
        if (language == null || !(language.equals("jp") || language.equals("ko") || language.equals("fil") || language.equals("eng"))) {
            response.sendRedirect("/HEW2/error.html");
            return;
        }

        // ボタンがクリックされた場合、対応するページにリダイレクト
        response.sendRedirect("top_" + language + ".html");
    }
}
