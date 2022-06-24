using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PizzaDeliveryBackend.Migrations
{
    public partial class _2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PizzaExtra_Extras_ExtraId",
                table: "PizzaExtra");

            migrationBuilder.DropForeignKey(
                name: "FK_PizzaExtra_Pizzas_PizzaId",
                table: "PizzaExtra");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PizzaExtra",
                table: "PizzaExtra");

            migrationBuilder.RenameTable(
                name: "PizzaExtra",
                newName: "PizzaExtras");

            migrationBuilder.RenameIndex(
                name: "IX_PizzaExtra_ExtraId",
                table: "PizzaExtras",
                newName: "IX_PizzaExtras_ExtraId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PizzaExtras",
                table: "PizzaExtras",
                columns: new[] { "PizzaId", "ExtraId" });

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaExtras_Extras_ExtraId",
                table: "PizzaExtras",
                column: "ExtraId",
                principalTable: "Extras",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaExtras_Pizzas_PizzaId",
                table: "PizzaExtras",
                column: "PizzaId",
                principalTable: "Pizzas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PizzaExtras_Extras_ExtraId",
                table: "PizzaExtras");

            migrationBuilder.DropForeignKey(
                name: "FK_PizzaExtras_Pizzas_PizzaId",
                table: "PizzaExtras");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PizzaExtras",
                table: "PizzaExtras");

            migrationBuilder.RenameTable(
                name: "PizzaExtras",
                newName: "PizzaExtra");

            migrationBuilder.RenameIndex(
                name: "IX_PizzaExtras_ExtraId",
                table: "PizzaExtra",
                newName: "IX_PizzaExtra_ExtraId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PizzaExtra",
                table: "PizzaExtra",
                columns: new[] { "PizzaId", "ExtraId" });

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaExtra_Extras_ExtraId",
                table: "PizzaExtra",
                column: "ExtraId",
                principalTable: "Extras",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaExtra_Pizzas_PizzaId",
                table: "PizzaExtra",
                column: "PizzaId",
                principalTable: "Pizzas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
