import * as yup from "yup";

const createAccountForm = yup.object().shape(
{
  username : yup.string().trim().min( 2, "Username Must Be Atleast 2 Letters" ).required( "Username Must Be Provided" ),
  email : yup.string().email( "Enter Correct Email Format" ).required( "Email Must Be Provided" ),
  password : yup.string().min( 2, "Username Must Be Atleast 2 Letters" ).required( "Password Must Be Provided" )
} );

const signInForm = yup.object().shape(
{
  username : yup.string().trim().min( 2, "Username Must Be Atleast 2 Letters" ).required( "Username Must Be Provided" ),
  password : yup.string().min( 2, "Username Must Be Atleast 2 Letters" ).required( "Password Must Be Provided" )
} );

export { createAccountForm, signInForm };