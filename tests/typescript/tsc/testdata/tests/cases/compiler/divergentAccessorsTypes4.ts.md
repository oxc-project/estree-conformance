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
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 23
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
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                },
                "start": 25,
                "end": 33
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 43,
                      "end": 45
                    },
                    "start": 36,
                    "end": 46
                  }
                ],
                "start": 34,
                "end": 48
              },
              "expression": false,
              "start": 23,
              "end": 48
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 60
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 64,
                          "end": 70
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 73,
                          "end": 79
                        }
                      ],
                      "start": 64,
                      "end": 79
                    },
                    "start": 62,
                    "end": 79
                  },
                  "start": 61,
                  "end": 79
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 81,
                "end": 84
              },
              "expression": false,
              "start": 60,
              "end": 84
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 51,
            "end": 84
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
              },
              "start": 93,
              "end": 101
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
            "start": 88,
            "end": 102
          }
        ],
        "start": 10,
        "end": 104
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 115
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 129
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 133,
                    "end": 140
                  },
                  "start": 133,
                  "end": 140
                },
                "start": 131,
                "end": 140
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 150,
                      "end": 157
                    },
                    "start": 143,
                    "end": 158
                  }
                ],
                "start": 141,
                "end": 160
              },
              "expression": false,
              "start": 129,
              "end": 160
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 120,
            "end": 160
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 172
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 176,
                            "end": 183
                          },
                          "start": 176,
                          "end": 183
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 186,
                          "end": 192
                        }
                      ],
                      "start": 176,
                      "end": 192
                    },
                    "start": 174,
                    "end": 192
                  },
                  "start": 173,
                  "end": 192
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 194,
                "end": 197
              },
              "expression": false,
              "start": 172,
              "end": 197
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 163,
            "end": 197
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 210
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
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                },
                "start": 212,
                "end": 220
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 230,
                      "end": 232
                    },
                    "start": 223,
                    "end": 233
                  }
                ],
                "start": 221,
                "end": 235
              },
              "expression": false,
              "start": 210,
              "end": 235
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 201,
            "end": 235
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 247
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 251,
                          "end": 257
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 260,
                            "end": 262
                          },
                          "start": 260,
                          "end": 262
                        }
                      ],
                      "start": 251,
                      "end": 262
                    },
                    "start": 249,
                    "end": 262
                  },
                  "start": 248,
                  "end": 262
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 264,
                "end": 267
              },
              "expression": false,
              "start": 247,
              "end": 267
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 238,
            "end": 267
          }
        ],
        "start": 116,
        "end": 270
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 270
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 292
                    },
                    "typeArguments": null,
                    "start": 289,
                    "end": 292
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 298
                    },
                    "typeArguments": null,
                    "start": 295,
                    "end": 298
                  }
                ],
                "start": 289,
                "end": 298
              },
              "start": 287,
              "end": 298
            },
            "start": 286,
            "end": 298
          },
          "init": null,
          "definite": false,
          "start": 286,
          "end": 298
        }
      ],
      "declare": true,
      "start": 272,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop1",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 319
        },
        "optional": false,
        "computed": false,
        "start": 312,
        "end": 319
      },
      "directive": null,
      "start": 312,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 342
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 348
          },
          "optional": false,
          "computed": false,
          "start": 341,
          "end": 348
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 351,
          "end": 353
        },
        "start": 341,
        "end": 353
      },
      "directive": null,
      "start": 341,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 356
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 362
          },
          "optional": false,
          "computed": false,
          "start": 355,
          "end": 362
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 365,
          "end": 372
        },
        "start": 355,
        "end": 372
      },
      "directive": null,
      "start": 355,
      "end": 373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 385
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop2",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 391
        },
        "optional": false,
        "computed": false,
        "start": 384,
        "end": 391
      },
      "directive": null,
      "start": 384,
      "end": 392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 400
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 406
          },
          "optional": false,
          "computed": false,
          "start": 399,
          "end": 406
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 409,
          "end": 411
        },
        "start": 399,
        "end": 411
      },
      "directive": null,
      "start": 399,
      "end": 412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 414
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 420
          },
          "optional": false,
          "computed": false,
          "start": 413,
          "end": 420
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 423,
          "end": 430
        },
        "start": 413,
        "end": 430
      },
      "directive": null,
      "start": 413,
      "end": 431
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 440
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 14,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 36,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "set",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 143,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 150,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 163,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 176,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 223,
    "end": 229
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 258,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 272,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 286,
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
    "value": "One",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 343,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 357,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 365,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 423,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  }
]
```
