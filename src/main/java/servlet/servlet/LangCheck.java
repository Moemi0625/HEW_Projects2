package servlet.servlet;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LangCheck {
    public void redirectToLanguagePage(String basePage, String languageSuffix, HttpServletRequest request, HttpServletResponse response) throws IOException {
        String languagePage = determineLanguagePage(basePage, languageSuffix, request.getParameter("language"));

        if (isValidLanguagePage(languagePage)) {
            response.sendRedirect(languagePage);
        } else {
            response.sendRedirect("/error.html");
        }
    }

    private String determineLanguagePage(String basePage, String languageSuffix, String language) {
        return basePage.replace("_jp", languageSuffix).replace("_ko", languageSuffix).replace("_fil", languageSuffix).replace("_eng", languageSuffix);
    }

    private boolean isValidLanguagePage(String page) {
        return page != null && !page.isEmpty();
    }
}