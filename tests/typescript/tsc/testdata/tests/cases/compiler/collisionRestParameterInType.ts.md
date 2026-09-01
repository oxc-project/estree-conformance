__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 13,
                        "end": 19
                      },
                      "start": 11,
                      "end": 19
                    },
                    "start": 9,
                    "end": 19
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "restParameters",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 24,
                      "end": 38
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 21,
                    "end": 38
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 43,
                    "end": 47
                  },
                  "start": 40,
                  "end": 47
                },
                "start": 8,
                "end": 47
              },
              "start": 6,
              "end": 47
            },
            "start": 4,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 47
        }
      ],
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 94,
                            "end": 100
                          },
                          "start": 92,
                          "end": 100
                        },
                        "start": 90,
                        "end": 100
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "restParameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 105,
                          "end": 119
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 102,
                        "end": 119
                      }
                    ],
                    "returnType": null,
                    "start": 89,
                    "end": 121
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 161,
                            "end": 167
                          },
                          "start": 159,
                          "end": 167
                        },
                        "start": 157,
                        "end": 167
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "restParameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 186
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 169,
                        "end": 186
                      }
                    ],
                    "returnType": null,
                    "start": 152,
                    "end": 188
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 222
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 227,
                            "end": 233
                          },
                          "start": 225,
                          "end": 233
                        },
                        "start": 223,
                        "end": 233
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "restParameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 252
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 235,
                        "end": 252
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 219,
                    "end": 254
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 289
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 296,
                                "end": 302
                              },
                              "start": 294,
                              "end": 302
                            },
                            "start": 292,
                            "end": 302
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "restParameters",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 307,
                              "end": 321
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 304,
                            "end": 321
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 326,
                            "end": 330
                          },
                          "start": 323,
                          "end": 330
                        },
                        "start": 291,
                        "end": 330
                      },
                      "start": 289,
                      "end": 330
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 285,
                    "end": 331
                  }
                ],
                "start": 83,
                "end": 359
              },
              "start": 81,
              "end": 359
            },
            "start": 79,
            "end": 359
          },
          "init": null,
          "definite": false,
          "start": 79,
          "end": 359
        }
      ],
      "declare": false,
      "start": 75,
      "end": 359
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 359
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 24,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 40,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 105,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 172,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 238,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 285,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 307,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 323,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 326,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  }
]
```
