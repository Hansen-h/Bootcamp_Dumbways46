package main

import (
	"fmt"
	"html/template"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// static file from directory
	e.Static("/public", "public")

	// routing
	e.GET("/", home)
	e.GET("/contact", contact)
	e.GET("/showProject", project)
	e.POST("/addProject", addProject)
	e.GET("/projectDetail/:id", projectDetail)

	fmt.Println("server started on port 5000")
	e.Logger.Fatal(e.Start("localhost:5000"))
}

type M map[string]interface{}

func home(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/index.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, M{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func contact(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/contact-me.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, M{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func project(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/addProject.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, M{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func projectDetail(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	tmpl, err := template.ParseFiles("views/add-project-detail.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, M{"message": err.Error()})
	}

	data := M{
		"Id":          id,
		"ProjectName": "Dumbways Mobile App",
		"Date":        "2 Jan 2023 - 2 Februari 2023",
		"Duration":    "1 month",
		"Description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae autem qui doloremque at deserunt explicabo, quae praesentium id, illum error nam. Blanditiis dicta tempore, a fugit voluptatibus eaque architecto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore culpa a adipisci quam qui repellat provident, sed praesentium ad alias, sunt quasi vel hic ab itaque omnis similique aut?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates temporibus eos enim vero aut earum repellendus consequatur accusantium eius aliquid, voluptatem culpa, tenetur deleniti in numquam quidem omnis odit eligendi!",
	}
	return tmpl.Execute(c.Response(), data)
}

func addProject(c echo.Context) error {
	projectName := c.FormValue("projectName")
	desc := c.FormValue("desc")

	fmt.Println(projectName)
	fmt.Println(desc)

	return c.Redirect(http.StatusMovedPermanently, "/showProject")
}
