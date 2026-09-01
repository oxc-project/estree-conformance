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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 26,
              "end": 29
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 29
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 48
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 49,
                "end": 51
              },
              "abstract": false,
              "declare": false,
              "start": 41,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 34,
            "end": 51
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 75
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 76,
                "end": 78
              },
              "declare": false,
              "start": 63,
              "end": 78
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 56,
            "end": 78
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 96,
              "end": 98
            },
            "declare": false,
            "start": 83,
            "end": 98
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 137
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 139,
                        "end": 145
                      },
                      "start": 137,
                      "end": 145
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 128,
                    "end": 146
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 164
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 166,
                        "end": 172
                      },
                      "start": 164,
                      "end": 172
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 155,
                    "end": 173
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 189,
                      "end": 192
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 195
                        },
                        "typeArguments": null,
                        "start": 194,
                        "end": 195
                      },
                      "start": 192,
                      "end": 195
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 182,
                    "end": 196
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m24",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 215
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 219
                        },
                        "typeArguments": null,
                        "start": 217,
                        "end": 219
                      },
                      "start": 215,
                      "end": 219
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 205,
                    "end": 220
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m232",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 240
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 245
                          },
                          "typeArguments": null,
                          "start": 244,
                          "end": 245
                        },
                        "start": 242,
                        "end": 245
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 255,
                              "end": 259
                            },
                            "start": 248,
                            "end": 260
                          }
                        ],
                        "start": 246,
                        "end": 261
                      },
                      "expression": false,
                      "start": 240,
                      "end": 261
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 229,
                    "end": 261
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m242",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 281
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 285,
                            "end": 287
                          },
                          "typeArguments": null,
                          "start": 285,
                          "end": 287
                        },
                        "start": 283,
                        "end": 287
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 297,
                              "end": 301
                            },
                            "start": 290,
                            "end": 302
                          }
                        ],
                        "start": 288,
                        "end": 304
                      },
                      "expression": false,
                      "start": 281,
                      "end": 304
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 270,
                    "end": 304
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m26",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 323
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 326,
                                "end": 328
                              },
                              "typeArguments": null,
                              "start": 326,
                              "end": 328
                            },
                            "start": 325,
                            "end": 328
                          },
                          "start": 324,
                          "end": 328
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 330,
                        "end": 332
                      },
                      "expression": false,
                      "start": 323,
                      "end": 332
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 313,
                    "end": 332
                  }
                ],
                "start": 118,
                "end": 338
              },
              "abstract": false,
              "declare": false,
              "start": 110,
              "end": 338
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 103,
            "end": 338
          }
        ],
        "start": 12,
        "end": 340
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 340
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 340
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
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 34,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 63,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
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
    "value": "D",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 128,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 182,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "m23",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 205,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "m24",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 229,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "m232",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 248,
    "end": 254
  },
  {
    "type": "Null",
    "value": "null",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 270,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "m242",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 290,
    "end": 296
  },
  {
    "type": "Null",
    "value": "null",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 313,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "m26",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  }
]
```
