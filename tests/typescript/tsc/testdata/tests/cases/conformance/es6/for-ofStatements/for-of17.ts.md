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
        "name": "NumberIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 20
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 65,
                            "end": 70
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 72,
                            "end": 73
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 65,
                          "end": 73
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 87,
                            "end": 91
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 93,
                            "end": 98
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 87,
                          "end": 98
                        }
                      ],
                      "start": 51,
                      "end": 108
                    },
                    "start": 44,
                    "end": 109
                  }
                ],
                "start": 34,
                "end": 115
              },
              "expression": false,
              "start": 31,
              "end": 115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 27,
            "end": 115
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 127
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 136
              },
              "optional": false,
              "computed": false,
              "start": 121,
              "end": 136
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
                      "type": "ThisExpression",
                      "start": 157,
                      "end": 161
                    },
                    "start": 150,
                    "end": 162
                  }
                ],
                "start": 140,
                "end": 168
              },
              "expression": false,
              "start": 137,
              "end": 168
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 120,
            "end": 168
          }
        ],
        "start": 21,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 170
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "start": 176,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 185
        }
      ],
      "declare": false,
      "start": 172,
      "end": 186
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 193
      },
      "right": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumberIterator",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 215
        },
        "typeArguments": null,
        "arguments": [],
        "start": 197,
        "end": 215
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 217,
        "end": 220
      },
      "start": 187,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 238
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
    "value": "NumberIterator",
    "start": 6,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
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
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 150,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 194,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "NumberIterator",
    "start": 201,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  }
]
```
