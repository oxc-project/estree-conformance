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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "start": 39,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 48
        }
      ],
      "declare": false,
      "start": 35,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "operator": "??",
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 60,
            "end": 61
          },
          "start": 56,
          "end": 61
        },
        "start": 50,
        "end": 62
      },
      "directive": null,
      "start": 50,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 74
          },
          "optional": false,
          "computed": false,
          "start": 64,
          "end": 74
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 64,
        "end": 76
      },
      "directive": null,
      "start": 64,
      "end": 77
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 118
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 120,
                            "end": 126
                          },
                          "start": 118,
                          "end": 126
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 117,
                        "end": 126
                      }
                    ],
                    "start": 115,
                    "end": 128
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 131,
                    "end": 140
                  }
                ],
                "start": 115,
                "end": 140
              },
              "start": 113,
              "end": 140
            },
            "start": 112,
            "end": 140
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 140
        }
      ],
      "declare": true,
      "start": 98,
      "end": 141
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 152
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 154,
                            "end": 160
                          },
                          "start": 152,
                          "end": 160
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 151,
                        "end": 160
                      }
                    ],
                    "start": 149,
                    "end": 162
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 165,
                    "end": 172
                  }
                ],
                "start": 149,
                "end": 172
              },
              "start": 147,
              "end": 172
            },
            "start": 146,
            "end": 172
          },
          "init": null,
          "definite": false,
          "start": 146,
          "end": 172
        }
      ],
      "declare": false,
      "start": 142,
      "end": 173
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 179
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "operator": "??",
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 187,
            "end": 191
          },
          "start": 182,
          "end": 191
        },
        "start": 178,
        "end": 191
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "directive": null,
            "start": 199,
            "end": 201
          }
        ],
        "start": 193,
        "end": 203
      },
      "alternate": null,
      "start": 174,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 204
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "number",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 66,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 98,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 131,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 165,
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
    "value": "if",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "o",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 184,
    "end": 186
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  }
]
```
