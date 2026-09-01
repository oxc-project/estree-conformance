__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Field",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clean",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 39
                    },
                    "typeArguments": null,
                    "start": 38,
                    "end": 39
                  },
                  "start": 36,
                  "end": 39
                },
                "start": 31,
                "end": 39
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
                },
                "typeArguments": null,
                "start": 42,
                "end": 43
              },
              "start": 40,
              "end": 43
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 25,
            "end": 43
          }
        ],
        "start": 19,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CharField",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 62
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Field",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 79
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              }
            ],
            "start": 79,
            "end": 87
          },
          "start": 74,
          "end": 87
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clean",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 99
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
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 107,
                      "end": 113
                    },
                    "start": 105,
                    "end": 113
                  },
                  "start": 100,
                  "end": 113
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "Yup",
                      "raw": "\"Yup\"",
                      "start": 132,
                      "end": 137
                    },
                    "start": 125,
                    "end": 138
                  }
                ],
                "start": 115,
                "end": 144
              },
              "expression": false,
              "start": 99,
              "end": 144
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 94,
            "end": 144
          }
        ],
        "start": 88,
        "end": 146
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 146
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberField",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 165
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Field",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 182
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 183,
                "end": 189
              }
            ],
            "start": 182,
            "end": 190
          },
          "start": 177,
          "end": 190
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clean",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 202
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
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 210,
                      "end": 216
                    },
                    "start": 208,
                    "end": 216
                  },
                  "start": 203,
                  "end": 216
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 235,
                      "end": 238
                    },
                    "start": 228,
                    "end": 239
                  }
                ],
                "start": 218,
                "end": 245
              },
              "expression": false,
              "start": 202,
              "end": 245
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 197,
            "end": 245
          }
        ],
        "start": 191,
        "end": 247
      },
      "abstract": false,
      "declare": false,
      "start": 148,
      "end": 247
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectField",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 266
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 267,
            "end": 268
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 289,
                          "end": 295
                        },
                        "start": 287,
                        "end": 295
                      },
                      "start": 283,
                      "end": 295
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Field",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 303
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 304,
                            "end": 307
                          }
                        ],
                        "start": 303,
                        "end": 308
                      },
                      "start": 298,
                      "end": 308
                    },
                    "start": 296,
                    "end": 308
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 282,
                  "end": 308
                }
              ],
              "start": 280,
              "end": 310
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 270,
            "end": 310
          }
        ],
        "start": 266,
        "end": 311
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 329
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 345,
                          "end": 346
                        },
                        "typeArguments": null,
                        "start": 345,
                        "end": 346
                      },
                      "start": 343,
                      "end": 346
                    },
                    "start": 337,
                    "end": 346
                  },
                  "readonly": false,
                  "static": false,
                  "start": 330,
                  "end": 346
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 348,
                "end": 351
              },
              "expression": false,
              "start": 329,
              "end": 351
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 318,
            "end": 351
          }
        ],
        "start": 312,
        "end": 353
      },
      "abstract": false,
      "declare": false,
      "start": 249,
      "end": 353
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
            "name": "person",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 365
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ObjectField",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 383
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 392
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 398,
                        "end": 409
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 394,
                      "end": 411
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 390,
                    "end": 411
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 421
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CharField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 427,
                        "end": 436
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 423,
                      "end": 438
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 417,
                    "end": 438
                  }
                ],
                "start": 384,
                "end": 440
              }
            ],
            "start": 368,
            "end": 441
          },
          "definite": false,
          "start": 359,
          "end": 441
        }
      ],
      "declare": false,
      "start": 355,
      "end": 442
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 450
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fields",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 457
          },
          "optional": false,
          "computed": false,
          "start": 444,
          "end": 457
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 460
        },
        "optional": false,
        "computed": false,
        "start": 444,
        "end": 460
      },
      "directive": null,
      "start": 444,
      "end": 461
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 461
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "clean",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "CharField",
    "start": 53,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 63,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "clean",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"Yup\"",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "class",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "NumberField",
    "start": 154,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 166,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 177,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "clean",
    "start": 197,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 228,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "ObjectField",
    "start": 255,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 272,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
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
    "value": "Field",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 318,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 330,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "ObjectField",
    "start": 372,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "NumberField",
    "start": 398,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "CharField",
    "start": 427,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  }
]
```
