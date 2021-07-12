import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header = () => {
    const router = useRouter();
    const styles = {
        main: {
            padding: 30,
            margin: 30,
            border: "1px solid #DDD"
        },
        link: {
            margin: 15
        },
        active: {
            margin: 15,
            color: "blue"
        }
    }
    return (
        <div style={styles.main}>
            <Link href="/" passHref>
                <span style={router.pathname === "/" ? styles.active : styles.link}>Home</span>
            </Link>
            <Link href="/profile" passHref>
                <span style={router.pathname === "/profile" ? styles.active : styles.link}>Profile</span>
            </Link>
            <Link href="/dashboard" passHref>
                <span style={router.pathname === "/dashboard" ? styles.active : styles.link}>Dashboard</span>
            </Link>
            <Link href="/login" passHref>
                <span style={router.pathname === "/login" ? styles.active : styles.link}>Login</span>
            </Link>
        </div>
    )
}