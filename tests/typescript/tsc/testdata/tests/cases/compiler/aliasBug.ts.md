__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Provide",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 45,
                "end": 52
              },
              "abstract": false,
              "declare": false,
              "start": 31,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 52
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 78
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 98,
                        "end": 101
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "ClassDeclaration",
                              "decorators": [],
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "boo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 116,
                                "end": 119
                              },
                              "typeParameters": null,
                              "superClass": null,
                              "superTypeArguments": null,
                              "implements": [],
                              "body": {
                                "type": "ClassBody",
                                "body": [],
                                "start": 120,
                                "end": 122
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 110,
                              "end": 122
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 103,
                            "end": 122
                          }
                        ],
                        "start": 102,
                        "end": 123
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 88,
                      "end": 123
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 81,
                    "end": 123
                  }
                ],
                "start": 79,
                "end": 124
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 65,
              "end": 124
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 58,
            "end": 124
          }
        ],
        "start": 14,
        "end": 126
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 126
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "provide",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 142
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 148
      },
      "importKind": "value",
      "start": 128,
      "end": 149
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "booz",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 161
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 167
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 171
          },
          "start": 164,
          "end": 171
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 175
        },
        "start": 164,
        "end": 175
      },
      "importKind": "value",
      "start": 150,
      "end": 176
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "provide",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 197
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Provide",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 205
              },
              "optional": false,
              "computed": false,
              "start": 190,
              "end": 205
            },
            "typeArguments": null,
            "arguments": [],
            "start": 186,
            "end": 207
          },
          "definite": false,
          "start": 182,
          "end": 207
        }
      ],
      "declare": false,
      "start": 178,
      "end": 208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 222
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "provide",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 237,
                          "end": 244
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Provide",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 245,
                          "end": 252
                        },
                        "start": 237,
                        "end": 252
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 252
                    },
                    "start": 235,
                    "end": 252
                  },
                  "start": 233,
                  "end": 252
                },
                "init": null,
                "definite": false,
                "start": 233,
                "end": 252
              }
            ],
            "declare": false,
            "start": 229,
            "end": 253
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
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 298,
                          "end": 301
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Provide",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 309
                        },
                        "start": 298,
                        "end": 309
                      },
                      "typeArguments": null,
                      "start": 298,
                      "end": 309
                    },
                    "start": 296,
                    "end": 309
                  },
                  "start": 294,
                  "end": 309
                },
                "init": null,
                "definite": false,
                "start": 294,
                "end": 309
              }
            ],
            "declare": false,
            "start": 290,
            "end": 310
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
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "booz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 324
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 328
                        },
                        "start": 320,
                        "end": 328
                      },
                      "typeArguments": null,
                      "start": 320,
                      "end": 328
                    },
                    "start": 319,
                    "end": 328
                  },
                  "start": 317,
                  "end": 328
                },
                "init": null,
                "definite": false,
                "start": 317,
                "end": 328
              }
            ],
            "declare": false,
            "start": 313,
            "end": 329
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
                  "name": "p22",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 339
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "provide",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 353
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Provide",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 361
                    },
                    "optional": false,
                    "computed": false,
                    "start": 346,
                    "end": 361
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 342,
                  "end": 363
                },
                "definite": false,
                "start": 336,
                "end": 363
              }
            ],
            "declare": false,
            "start": 332,
            "end": 364
          }
        ],
        "start": 225,
        "end": 366
      },
      "expression": false,
      "start": 210,
      "end": 366
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 366
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 24,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Provide",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 58,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 65,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 128,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "provide",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 150,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "booz",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "provide",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "Provide",
    "start": 198,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "use",
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
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "provide",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "Provide",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "Provide",
    "start": 302,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 313,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "booz",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "p22",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "provide",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Provide",
    "start": 354,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  }
]
```
