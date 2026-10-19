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
          "name": "A",
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
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 32
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
                            "start": 85,
                            "end": 89
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 105
                          },
                          "optional": false,
                          "computed": false,
                          "start": 85,
                          "end": 105
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 108,
                          "end": 113
                        },
                        "start": 85,
                        "end": 113
                      },
                      "directive": null,
                      "start": 85,
                      "end": 114
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
                            "start": 164,
                            "end": 168
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "protectedProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 169,
                            "end": 186
                          },
                          "optional": false,
                          "computed": false,
                          "start": 164,
                          "end": 186
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 189,
                          "end": 191
                        },
                        "start": 164,
                        "end": 191
                      },
                      "directive": null,
                      "start": 164,
                      "end": 192
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
                            "start": 241,
                            "end": 245
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "readonlyProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 262
                          },
                          "optional": false,
                          "computed": false,
                          "start": 241,
                          "end": 262
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 265,
                          "end": 266
                        },
                        "start": 241,
                        "end": 266
                      },
                      "directive": null,
                      "start": 241,
                      "end": 267
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
                            "start": 314,
                            "end": 318
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 319,
                            "end": 333
                          },
                          "optional": false,
                          "computed": false,
                          "start": 314,
                          "end": 333
                        },
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "0n",
                          "bigint": "0",
                          "start": 336,
                          "end": 338
                        },
                        "start": 314,
                        "end": 338
                      },
                      "directive": null,
                      "start": 314,
                      "end": 339
                    }
                  ],
                  "start": 35,
                  "end": 345
                },
                "expression": false,
                "start": 32,
                "end": 345
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 21,
              "end": 345
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "initialize",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 368
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
                            "start": 420,
                            "end": 424
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 425,
                            "end": 446
                          },
                          "optional": false,
                          "computed": false,
                          "start": 420,
                          "end": 446
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 449,
                            "end": 455
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 449,
                          "end": 457
                        },
                        "start": 420,
                        "end": 457
                      },
                      "directive": null,
                      "start": 420,
                      "end": 458
                    }
                  ],
                  "start": 371,
                  "end": 464
                },
                "expression": false,
                "start": 368,
                "end": 464
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 351,
              "end": 464
            }
          ],
          "start": 15,
          "end": 466
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 466
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 466
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 466
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
    "value": "A",
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
    "type": "Identifier",
    "value": "constructor",
    "start": 21,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 85,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "privateProperty",
    "start": 90,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "this",
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
    "value": "protectedProperty",
    "start": 169,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "readonlyProperty",
    "start": 246,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "publicProperty",
    "start": 319,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 351,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "initialize",
    "start": 358,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "privateStaticProperty",
    "start": 425,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  }
]
```
