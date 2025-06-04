<template>
    <footer>
        <p>&copy; {{ currentYear }}</p>
        <nav>
            <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>