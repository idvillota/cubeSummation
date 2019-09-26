using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CubeSummation.Entities.Migrations
{
    public partial class UpdateCubeModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ArrayValue",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    X = table.Column<int>(nullable: false),
                    Y = table.Column<int>(nullable: false),
                    Z = table.Column<int>(nullable: false),
                    Value = table.Column<int>(nullable: false),
                    CubeId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArrayValue", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ArrayValue_Cubes_CubeId",
                        column: x => x.CubeId,
                        principalTable: "Cubes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArrayValue_CubeId",
                table: "ArrayValue",
                column: "CubeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArrayValue");
        }
    }
}
