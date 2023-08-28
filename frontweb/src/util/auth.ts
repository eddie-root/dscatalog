import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const getTokenData = () : TokenData | undefined => {

    const LoginResponse = getAuthData();

    try {
        return jwtDecode(LoginResponse.access_token) as TokenData;
    }catch (error) {
        return undefined;
    }

  }

  export const isAuthenticated = () : boolean => {
    const TokenData = getTokenData();
    return (TokenData && TokenData.exp * 1000 > Date.now()) ? true : false;
  }

export const hasAnyRoles = (roles: Role[]): boolean => {
    if (roles.length === 0 ){
      return true;
    }

    const TokenData = getTokenData();

    //formula de procura de roles 
    if (TokenData !== undefined){
      return roles.some(item => TokenData.authorities.includes(item));
     
    }

    //formula alternativa para procurar roles....
    // if (TokenData !== undefined){
    //   for (var i = 0; i < roles.length; i++){
    //     if(TokenData.authorities.includes(roles[i])){
    //       return true;
    //     }
    //   }
    // }


    return false;
  }

