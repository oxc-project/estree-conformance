__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17,
                      "end": 18
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 20,
                              "end": 21
                            },
                            "start": 20,
                            "end": 21
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 24,
                              "end": 25
                            },
                            "start": 24,
                            "end": 25
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 28,
                            "end": 37
                          }
                        ],
                        "start": 20,
                        "end": 37
                      },
                      "start": 18,
                      "end": 37
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 17,
                    "end": 37
                  }
                ],
                "start": 15,
                "end": 39
              },
              "start": 13,
              "end": 39
            },
            "start": 12,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 39
        }
      ],
      "declare": true,
      "start": 0,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 53
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 48,
                "end": 53
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 55
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "definite": false,
          "start": 46,
          "end": 59
        }
      ],
      "declare": false,
      "start": 42,
      "end": 60
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 72
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 75,
                    "end": 76
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 76
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 67,
                "end": 76
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 78
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "definite": false,
          "start": 65,
          "end": 82
        }
      ],
      "declare": false,
      "start": 61,
      "end": 83
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 95
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 98,
                    "end": 99
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 90,
                "end": 99
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 101
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "definite": false,
          "start": 88,
          "end": 105
        }
      ],
      "declare": false,
      "start": 84,
      "end": 106
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 118
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 121,
                      "end": 122
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 131
                      },
                      "typeArguments": null,
                      "start": 126,
                      "end": 131
                    },
                    "start": 121,
                    "end": 131
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 131
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 113,
                "end": 131
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 133
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "definite": false,
          "start": 111,
          "end": 137
        }
      ],
      "declare": false,
      "start": 107,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 146
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 152
            },
            "optional": false,
            "computed": false,
            "start": 149,
            "end": 152
          },
          "definite": false,
          "start": 144,
          "end": 152
        }
      ],
      "declare": false,
      "start": 140,
      "end": 153
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "optional": false,
              "computed": false,
              "start": 163,
              "end": 166
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 170,
              "end": 171
            },
            "start": 163,
            "end": 171
          },
          "definite": false,
          "start": 158,
          "end": 171
        }
      ],
      "declare": false,
      "start": 154,
      "end": 172
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 179
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 183
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 185
              },
              "optional": false,
              "computed": false,
              "start": 182,
              "end": 185
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 189,
              "end": 190
            },
            "start": 182,
            "end": 190
          },
          "definite": false,
          "start": 177,
          "end": 190
        }
      ],
      "declare": false,
      "start": 173,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 198
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 202
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "optional": false,
              "computed": false,
              "start": 201,
              "end": 204
            },
            "operator": "??",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 208,
                "end": 209
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 218
                },
                "typeArguments": null,
                "start": 213,
                "end": 218
              },
              "start": 208,
              "end": 218
            },
            "start": 201,
            "end": 218
          },
          "definite": false,
          "start": 196,
          "end": 218
        }
      ],
      "declare": false,
      "start": 192,
      "end": 219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 256
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 264
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "yo",
                      "raw": "'yo'",
                      "start": 266,
                      "end": 270
                    },
                    "start": 266,
                    "end": 270
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ha",
                      "raw": "'ha'",
                      "start": 273,
                      "end": 277
                    },
                    "start": 273,
                    "end": 277
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 280,
                    "end": 289
                  }
                ],
                "start": 266,
                "end": 289
              },
              "start": 264,
              "end": 289
            },
            "accessibility": null,
            "static": false,
            "start": 261,
            "end": 290
          }
        ],
        "start": 257,
        "end": 292
      },
      "declare": false,
      "start": 243,
      "end": 292
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 303
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 303
                  },
                  "right": {
                    "type": "Literal",
                    "value": "yo",
                    "raw": "'yo'",
                    "start": 306,
                    "end": 310
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 310
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 300,
                "end": 310
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 312
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 315,
              "end": 317
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 324
              },
              "typeArguments": null,
              "start": 321,
              "end": 324
            },
            "start": 315,
            "end": 324
          },
          "definite": false,
          "start": 298,
          "end": 324
        }
      ],
      "declare": false,
      "start": 294,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 330
      },
      "directive": null,
      "start": 327,
      "end": 331
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 347
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "a",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 28,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 51,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
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
    "value": "let",
    "start": 84,
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
    "value": "a",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 167,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 173,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "a",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 186,
    "end": 188
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 205,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 243,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "String",
    "value": "'yo'",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272
  },
  {
    "type": "String",
    "value": "'ha'",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 280,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "'yo'",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  }
]
```
