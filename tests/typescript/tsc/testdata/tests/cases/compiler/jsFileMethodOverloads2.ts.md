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
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 102
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
              "start": 142,
              "end": 153
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
                  "start": 154,
                  "end": 159
                }
              ],
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
                          "start": 167,
                          "end": 171
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 177
                        },
                        "optional": false,
                        "computed": false,
                        "start": 167,
                        "end": 177
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 185
                      },
                      "start": 167,
                      "end": 185
                    },
                    "directive": null,
                    "start": 167,
                    "end": 186
                  }
                ],
                "start": 161,
                "end": 190
              },
              "expression": false,
              "start": 153,
              "end": 190
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 142,
            "end": 190
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getTypeName",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 400
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
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 423,
                          "end": 427
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 428,
                          "end": 433
                        },
                        "optional": false,
                        "computed": false,
                        "start": 423,
                        "end": 433
                      },
                      "prefix": true,
                      "start": 416,
                      "end": 433
                    },
                    "start": 409,
                    "end": 434
                  }
                ],
                "start": 403,
                "end": 438
              },
              "expression": false,
              "start": 400,
              "end": 438
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 389,
            "end": 438
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 646
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
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 649
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 666
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 669,
                          "end": 671
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 672,
                              "end": 676
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 677,
                              "end": 682
                            },
                            "optional": false,
                            "computed": false,
                            "start": 672,
                            "end": 682
                          }
                        ],
                        "optional": false,
                        "start": 669,
                        "end": 683
                      },
                      "alternate": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 686,
                          "end": 690
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 691,
                          "end": 696
                        },
                        "optional": false,
                        "computed": false,
                        "start": 686,
                        "end": 696
                      },
                      "start": 664,
                      "end": 696
                    },
                    "start": 657,
                    "end": 697
                  }
                ],
                "start": 651,
                "end": 701
              },
              "expression": false,
              "start": 646,
              "end": 701
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 637,
            "end": 701
          }
        ],
        "start": 103,
        "end": 703
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 703
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 89,
  "end": 703
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 142,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 167,
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
    "value": "value",
    "start": 172,
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
    "value": "value",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "getTypeName",
    "start": 389,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 409,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 416,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 428,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 637,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 657,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 672,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 691,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  }
]
```
