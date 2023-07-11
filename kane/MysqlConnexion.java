import java.sql.*;  

class MysqlConnexion{  
	public static void main(String args[]){  
		try{  
			Class.forName("com.mysql.jdbc.Driver");  
			Connection con=DriverManager.getConnection(  
			"jdbc:mysql://localhost:3306/mabase","root","root");  
			//mabase est le nom de la base, root le nom d'utilisateur et pas de mot de passe  
			
			Statement stmt=con.createStatement();  
			ResultSet rs=stmt.executeQuery("select * from emp");  //emp est une table de mabase  
			/*
			 Vous remplacerez mabase par votre base de données et emp par votre table. 
			*/
			while(rs.next())  
	 		 System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3)); 
	 		 //les 1, 2 et 3 sont les numero des champs de votre tables; ici c'est emp 
	 		  // avec 3 champs: un entier et deux String

			con.close();  
		}
		catch(Exception e){ 
			System.out.println(e);
		}  
	}  
}  