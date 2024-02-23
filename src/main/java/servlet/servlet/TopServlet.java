package servlet.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/topServlet")
public class TopServlet extends HttpServlet {
 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
     LangCheck langCheck = new LangCheck();
     langCheck.redirectToLanguagePage("/top_jp.html", "_jp", request, response);
 }
}
