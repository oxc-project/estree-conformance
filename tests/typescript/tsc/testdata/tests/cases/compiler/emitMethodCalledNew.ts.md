__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "new",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 81
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 85,
                            "end": 91
                          },
                          "start": 83,
                          "end": 91
                        },
                        "start": 82,
                        "end": 91
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 102,
                              "end": 103
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 106,
                              "end": 107
                            },
                            "start": 102,
                            "end": 107
                          },
                          "start": 95,
                          "end": 107
                        }
                      ],
                      "start": 93,
                      "end": 109
                    },
                    "expression": false,
                    "start": 81,
                    "end": 109
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 78,
                  "end": 109
                }
              ],
              "start": 74,
              "end": 111
            },
            "definite": false,
            "start": 70,
            "end": 111
          }
        ],
        "declare": false,
        "start": 64,
        "end": 111
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "new",
                    "raw": "\"new\"",
                    "start": 133,
                    "end": 138
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 142,
                            "end": 148
                          },
                          "start": 140,
                          "end": 148
                        },
                        "start": 139,
                        "end": 148
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 159,
                              "end": 160
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 163,
                              "end": 164
                            },
                            "start": 159,
                            "end": 164
                          },
                          "start": 152,
                          "end": 164
                        }
                      ],
                      "start": 150,
                      "end": 166
                    },
                    "expression": false,
                    "start": 138,
                    "end": 166
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 133,
                  "end": 166
                }
              ],
              "start": 129,
              "end": 168
            },
            "definite": false,
            "start": 125,
            "end": 168
          }
        ],
        "declare": false,
        "start": 119,
        "end": 168
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 112,
      "end": 168
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "new",
                    "raw": "\"new\"",
                    "start": 191,
                    "end": 196
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 201,
                            "end": 207
                          },
                          "start": 199,
                          "end": 207
                        },
                        "start": 198,
                        "end": 207
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 218,
                              "end": 219
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 222,
                              "end": 223
                            },
                            "start": 218,
                            "end": 223
                          },
                          "start": 211,
                          "end": 223
                        }
                      ],
                      "start": 209,
                      "end": 225
                    },
                    "expression": false,
                    "start": 197,
                    "end": 225
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 190,
                  "end": 225
                }
              ],
              "start": 186,
              "end": 227
            },
            "definite": false,
            "start": 182,
            "end": 227
          }
        ],
        "declare": false,
        "start": 176,
        "end": 227
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 169,
      "end": 227
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 227
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 95,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "String",
    "value": "\"new\"",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 152,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 161,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 169,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191
  },
  {
    "type": "String",
    "value": "\"new\"",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 211,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  }
]
```
