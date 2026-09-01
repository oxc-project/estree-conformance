__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Employee",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 28
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
              "start": 42,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
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
            "start": 35,
            "end": 55
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "address",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
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
            "start": 60,
            "end": 83
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "retired",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 102
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 105,
              "end": 110
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 88,
            "end": 111
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "manager",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Employee",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 140
                },
                "typeArguments": null,
                "start": 132,
                "end": 140
              },
              "start": 130,
              "end": 140
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 143,
              "end": 147
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 116,
            "end": 148
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reports",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Employee",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 177
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 177
                },
                "start": 169,
                "end": 179
              },
              "start": 167,
              "end": 179
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 182,
              "end": 184
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 153,
            "end": 185
          }
        ],
        "start": 29,
        "end": 187
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 187
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Employee2",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 204
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
              "start": 218,
              "end": 222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              },
              "start": 222,
              "end": 230
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
            "start": 211,
            "end": 231
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "address",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 250
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 252,
                "end": 258
              },
              "start": 250,
              "end": 258
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
            "start": 236,
            "end": 259
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "retired",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 278
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 280,
                "end": 287
              },
              "start": 278,
              "end": 287
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
            "start": 264,
            "end": 288
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "manager",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 307
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Employee",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 317
                },
                "typeArguments": null,
                "start": 309,
                "end": 317
              },
              "start": 307,
              "end": 317
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
            "start": 293,
            "end": 318
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reports",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 337
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Employee",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 347
                  },
                  "typeArguments": null,
                  "start": 339,
                  "end": 347
                },
                "start": 339,
                "end": 349
              },
              "start": 337,
              "end": 349
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
            "start": 323,
            "end": 350
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 366
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 379,
                          "end": 383
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "retired",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 391
                        },
                        "optional": false,
                        "computed": false,
                        "start": 379,
                        "end": 391
                      },
                      "right": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 394,
                        "end": 399
                      },
                      "start": 379,
                      "end": 399
                    },
                    "directive": null,
                    "start": 379,
                    "end": 400
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 409,
                          "end": 413
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "manager",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 414,
                          "end": 421
                        },
                        "optional": false,
                        "computed": false,
                        "start": 409,
                        "end": 421
                      },
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 424,
                        "end": 428
                      },
                      "start": 409,
                      "end": 428
                    },
                    "directive": null,
                    "start": 409,
                    "end": 429
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 438,
                          "end": 442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reports",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 450
                        },
                        "optional": false,
                        "computed": false,
                        "start": 438,
                        "end": 450
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 453,
                        "end": 455
                      },
                      "start": 438,
                      "end": 455
                    },
                    "directive": null,
                    "start": 438,
                    "end": 456
                  }
                ],
                "start": 369,
                "end": 462
              },
              "expression": false,
              "start": 366,
              "end": 462
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 355,
            "end": 462
          }
        ],
        "start": 205,
        "end": 464
      },
      "abstract": false,
      "declare": false,
      "start": 189,
      "end": 464
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Employee",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 482
                },
                "typeArguments": null,
                "start": 474,
                "end": 482
              },
              "start": 472,
              "end": 482
            },
            "start": 470,
            "end": 482
          },
          "init": null,
          "definite": false,
          "start": 470,
          "end": 482
        }
      ],
      "declare": false,
      "start": 466,
      "end": 483
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Employee2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 501
                },
                "typeArguments": null,
                "start": 492,
                "end": 501
              },
              "start": 490,
              "end": 501
            },
            "start": 488,
            "end": 501
          },
          "init": null,
          "definite": false,
          "start": 488,
          "end": 501
        }
      ],
      "declare": false,
      "start": 484,
      "end": 502
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null,
          "start": 503,
          "end": 505
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null,
          "start": 508,
          "end": 510
        },
        "start": 503,
        "end": 510
      },
      "directive": null,
      "start": 503,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 514
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null,
          "start": 517,
          "end": 519
        },
        "start": 512,
        "end": 519
      },
      "directive": null,
      "start": 512,
      "end": 520
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 520
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 14,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 20,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "address",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 88,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "retired",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 116,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "manager",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 132,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Null",
    "value": "null",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 153,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "reports",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 169,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 189,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Employee2",
    "start": 195,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 211,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 236,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "address",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 264,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "retired",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 293,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "manager",
    "start": 300,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 323,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "reports",
    "start": 330,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 339,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 355,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "retired",
    "start": 384,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 409,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "manager",
    "start": 414,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Null",
    "value": "null",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "reports",
    "start": 443,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 474,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 488,
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
    "value": "Employee2",
    "start": 492,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  }
]
```
