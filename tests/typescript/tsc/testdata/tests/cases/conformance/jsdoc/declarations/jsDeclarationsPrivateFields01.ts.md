__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
          "start": 13,
          "end": 14
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
                "type": "PrivateIdentifier",
                "name": "hello",
                "start": 21,
                "end": 27
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 30,
                "end": 37
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 38
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "world",
                "start": 43,
                "end": 49
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 52,
                "end": 55
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 43,
              "end": 56
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "calcHello",
                "start": 62,
                "end": 72
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 92,
                          "end": 96
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "hello",
                          "start": 97,
                          "end": 103
                        },
                        "optional": false,
                        "computed": false,
                        "start": 92,
                        "end": 103
                      },
                      "start": 85,
                      "end": 104
                    }
                  ],
                  "start": 75,
                  "end": 110
                },
                "expression": false,
                "start": 72,
                "end": 110
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 62,
              "end": 110
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "screamingHello",
                "start": 120,
                "end": 135
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 155,
                              "end": 159
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "hello",
                              "start": 160,
                              "end": 166
                            },
                            "optional": false,
                            "computed": false,
                            "start": 155,
                            "end": 166
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toUpperCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 167,
                            "end": 178
                          },
                          "optional": false,
                          "computed": false,
                          "start": 155,
                          "end": 178
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 155,
                        "end": 180
                      },
                      "start": 148,
                      "end": 181
                    }
                  ],
                  "start": 138,
                  "end": 187
                },
                "expression": false,
                "start": 135,
                "end": 187
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 116,
              "end": 187
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "screamingHello",
                "start": 229,
                "end": 244
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 250
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "NO",
                        "raw": "\"NO\"",
                        "start": 268,
                        "end": 272
                      },
                      "start": 262,
                      "end": 273
                    }
                  ],
                  "start": 252,
                  "end": 279
                },
                "expression": false,
                "start": 244,
                "end": 279
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 225,
              "end": 279
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getWorld",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 293
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 313,
                          "end": 317
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "world",
                          "start": 318,
                          "end": 324
                        },
                        "optional": false,
                        "computed": false,
                        "start": 313,
                        "end": 324
                      },
                      "start": 306,
                      "end": 325
                    }
                  ],
                  "start": 296,
                  "end": 331
                },
                "expression": false,
                "start": 293,
                "end": 331
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 285,
              "end": 331
            }
          ],
          "start": 15,
          "end": 333
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 333
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 333
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 333
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "PrivateIdentifier",
    "value": "hello",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "PrivateIdentifier",
    "value": "world",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "PrivateIdentifier",
    "value": "calcHello",
    "start": 62,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "return",
    "start": 85,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "PrivateIdentifier",
    "value": "hello",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 116,
    "end": 119
  },
  {
    "type": "PrivateIdentifier",
    "value": "screamingHello",
    "start": 120,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 148,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "PrivateIdentifier",
    "value": "hello",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 167,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 225,
    "end": 228
  },
  {
    "type": "PrivateIdentifier",
    "value": "screamingHello",
    "start": 229,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 245,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 262,
    "end": 267
  },
  {
    "type": "String",
    "value": "\"NO\"",
    "start": 268,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "getWorld",
    "start": 285,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 306,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318
  },
  {
    "type": "PrivateIdentifier",
    "value": "world",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  }
]
```
