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
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 11
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 10,
          "end": 13
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 18
        },
        "start": 10,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 45,
                "end": 48
              },
              "expression": false,
              "start": 32,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 48
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 68,
                "end": 71
              },
              "abstract": false,
              "declare": false,
              "start": 60,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 53,
            "end": 71
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
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
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 116,
                            "end": 117
                          },
                          "init": null,
                          "definite": false,
                          "start": 116,
                          "end": 117
                        }
                      ],
                      "declare": false,
                      "start": 112,
                      "end": 118
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 105,
                    "end": 118
                  }
                ],
                "start": 95,
                "end": 124
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 83,
              "end": 124
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 76,
            "end": 124
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "body": {
                "type": "TSEnumBody",
                "members": [],
                "start": 143,
                "end": 146
              },
              "const": false,
              "declare": false,
              "start": 136,
              "end": 146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 129,
            "end": 146
          }
        ],
        "start": 19,
        "end": 148
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 148
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
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
              "start": 160,
              "end": 161
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "start": 160,
            "end": 163
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 168
          },
          "start": 160,
          "end": 168
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 170
        },
        "start": 160,
        "end": 170
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
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 189
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 192,
                          "end": 193
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 195
                        },
                        "optional": false,
                        "computed": false,
                        "start": 192,
                        "end": 195
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 200
                      },
                      "optional": false,
                      "computed": false,
                      "start": 192,
                      "end": 200
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 201,
                      "end": 202
                    },
                    "optional": false,
                    "computed": false,
                    "start": 192,
                    "end": 202
                  },
                  "definite": false,
                  "start": 188,
                  "end": 202
                }
              ],
              "declare": false,
              "start": 184,
              "end": 203
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 177,
            "end": 203
          },
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 243,
                          "end": 244
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 245,
                          "end": 246
                        },
                        "optional": false,
                        "computed": false,
                        "start": 243,
                        "end": 246
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 251
                      },
                      "optional": false,
                      "computed": false,
                      "start": 243,
                      "end": 251
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "optional": false,
                    "computed": false,
                    "start": 243,
                    "end": 253
                  },
                  "definite": false,
                  "start": 239,
                  "end": 253
                }
              ],
              "declare": false,
              "start": 235,
              "end": 254
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 228,
            "end": 254
          },
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
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 295
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 296,
                          "end": 297
                        },
                        "optional": false,
                        "computed": false,
                        "start": 294,
                        "end": 297
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 302
                      },
                      "optional": false,
                      "computed": false,
                      "start": 294,
                      "end": 302
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 304
                    },
                    "optional": false,
                    "computed": false,
                    "start": 294,
                    "end": 304
                  },
                  "definite": false,
                  "start": 290,
                  "end": 304
                }
              ],
              "declare": false,
              "start": 286,
              "end": 305
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 279,
            "end": 305
          },
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
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 345,
                          "end": 346
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 348
                        },
                        "optional": false,
                        "computed": false,
                        "start": 345,
                        "end": 348
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 353
                      },
                      "optional": false,
                      "computed": false,
                      "start": 345,
                      "end": 353
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 355
                    },
                    "optional": false,
                    "computed": false,
                    "start": 345,
                    "end": 355
                  },
                  "definite": false,
                  "start": 341,
                  "end": 355
                }
              ],
              "declare": false,
              "start": 337,
              "end": 356
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 330,
            "end": 356
          }
        ],
        "start": 171,
        "end": 378
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 150,
      "end": 378
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 378
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
    "value": "X",
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
    "value": "Y",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 32,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
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
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 53,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 129,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 136,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 150,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 177,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 184,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 228,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 243,
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
    "value": "Y",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Keyword",
    "value": "export",
    "start": 279,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 330,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 349,
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
    "value": "E",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  }
]
```
