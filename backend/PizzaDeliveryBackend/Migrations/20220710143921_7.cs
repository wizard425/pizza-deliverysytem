using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PizzaDeliveryBackend.Migrations
{
    public partial class _7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDrinks_Drink_DrinkId",
                table: "OrderDrinks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Drink",
                table: "Drink");

            migrationBuilder.RenameTable(
                name: "Drink",
                newName: "Drinks");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Drinks",
                table: "Drinks",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDrinks_Drinks_DrinkId",
                table: "OrderDrinks",
                column: "DrinkId",
                principalTable: "Drinks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDrinks_Drinks_DrinkId",
                table: "OrderDrinks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Drinks",
                table: "Drinks");

            migrationBuilder.RenameTable(
                name: "Drinks",
                newName: "Drink");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Drink",
                table: "Drink",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDrinks_Drink_DrinkId",
                table: "OrderDrinks",
                column: "DrinkId",
                principalTable: "Drink",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
