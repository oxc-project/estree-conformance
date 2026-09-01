__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 11
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 34,
                        "end": 40
                      },
                      "start": 32,
                      "end": 40
                    },
                    "start": 31,
                    "end": 40
                  },
                  "init": null,
                  "definite": false,
                  "start": 31,
                  "end": 40
                }
              ],
              "declare": false,
              "start": 27,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 41
          }
        ],
        "start": 14,
        "end": 43
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 99,
                              "end": 105
                            },
                            "start": 97,
                            "end": 105
                          },
                          "start": 96,
                          "end": 105
                        },
                        "init": null,
                        "definite": false,
                        "start": 96,
                        "end": 105
                      }
                    ],
                    "declare": false,
                    "start": 92,
                    "end": 106
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 85,
                  "end": 106
                }
              ],
              "start": 75,
              "end": 112
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 63,
            "end": 112
          }
        ],
        "start": 56,
        "end": 114
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 45,
      "end": 114
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "start": 161,
            "end": 170
          },
          "init": null,
          "definite": false,
          "start": 161,
          "end": 170
        }
      ],
      "declare": false,
      "start": 157,
      "end": 171
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 183
              },
              "optional": false,
              "computed": false,
              "start": 180,
              "end": 183
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "optional": false,
            "computed": false,
            "start": 180,
            "end": 185
          },
          "definite": false,
          "start": 176,
          "end": 185
        }
      ],
      "declare": false,
      "start": 172,
      "end": 186
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 199
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 201
          },
          "start": 198,
          "end": 201
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 203
        },
        "start": 198,
        "end": 203
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
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 227
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
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 244
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 246,
                        "end": 252
                      },
                      "start": 244,
                      "end": 252
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 238,
                    "end": 253
                  }
                ],
                "start": 228,
                "end": 259
              },
              "abstract": false,
              "declare": false,
              "start": 217,
              "end": 259
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 210,
            "end": 259
          }
        ],
        "start": 204,
        "end": 261
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 188,
      "end": 261
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 274
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
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 299
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSModuleDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 321
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
                              "name": "Line",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 349,
                              "end": 353
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
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 372,
                                    "end": 376
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 378,
                                      "end": 384
                                    },
                                    "start": 376,
                                    "end": 384
                                  },
                                  "value": null,
                                  "computed": false,
                                  "static": false,
                                  "declare": false,
                                  "override": false,
                                  "optional": false,
                                  "definite": false,
                                  "readonly": false,
                                  "accessibility": null,
                                  "start": 372,
                                  "end": 385
                                }
                              ],
                              "start": 354,
                              "end": 399
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 343,
                            "end": 399
                          },
                          "specifiers": [],
                          "source": null,
                          "exportKind": "value",
                          "attributes": [],
                          "start": 336,
                          "end": 399
                        }
                      ],
                      "start": 322,
                      "end": 409
                    },
                    "kind": "namespace",
                    "declare": false,
                    "global": false,
                    "start": 310,
                    "end": 409
                  }
                ],
                "start": 300,
                "end": 415
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 288,
              "end": 415
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 281,
            "end": 415
          }
        ],
        "start": 275,
        "end": 417
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 263,
      "end": 417
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
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 473
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 475,
                        "end": 481
                      },
                      "start": 473,
                      "end": 481
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 467,
                    "end": 481
                  }
                ],
                "start": 465,
                "end": 483
              },
              "start": 463,
              "end": 483
            },
            "start": 462,
            "end": 483
          },
          "init": null,
          "definite": false,
          "start": 462,
          "end": 483
        }
      ],
      "declare": false,
      "start": 458,
      "end": 484
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
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 492,
                        "end": 493
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 494,
                        "end": 495
                      },
                      "start": 492,
                      "end": 495
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 497
                    },
                    "start": 492,
                    "end": 497
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 502
                  },
                  "start": 492,
                  "end": 502
                },
                "typeArguments": null,
                "start": 492,
                "end": 502
              },
              "start": 490,
              "end": 502
            },
            "start": 489,
            "end": 502
          },
          "init": null,
          "definite": false,
          "start": 489,
          "end": 502
        }
      ],
      "declare": false,
      "start": 485,
      "end": 503
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 503
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 12,
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
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 63,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 85,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 188,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 210,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 263,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 281,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 288,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 310,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 336,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 343,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 458,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  }
]
```
