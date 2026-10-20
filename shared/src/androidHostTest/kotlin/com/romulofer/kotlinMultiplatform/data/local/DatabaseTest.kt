package com.romulofer.kotlinMultiplatform.data.local

import app.cash.sqldelight.driver.jdbc.sqlite.JdbcSqliteDriver
import assertk.assertThat
import assertk.assertions.containsExactly
import kotlin.test.Test

class DatabaseTest {

    @Test
    fun `inserts and reads a player`() {
        val driver = JdbcSqliteDriver(JdbcSqliteDriver.IN_MEMORY)
        QuizDatabase.Schema.create(driver)
        val database = QuizDatabase(driver)

        database.playerQueries.insert("Ana")

        val names = database.playerQueries.selectAll().executeAsList().map { it.name }
        assertThat(names).containsExactly("Ana")
    }
}
