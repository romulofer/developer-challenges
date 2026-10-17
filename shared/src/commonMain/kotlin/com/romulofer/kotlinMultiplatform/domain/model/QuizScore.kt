package com.romulofer.kotlinMultiplatform.domain.model

data class QuizScore(
    val id: Long,
    val playerId: Long,
    val correctAnswers: Int,
    val totalQuestions: Int,
    val playedAtEpochMillis: Long
)
