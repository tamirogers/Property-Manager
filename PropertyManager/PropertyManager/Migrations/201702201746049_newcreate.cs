namespace PropertyManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newcreate : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Properties", "Photo", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Properties", "Photo", c => c.Binary());
        }
    }
}
