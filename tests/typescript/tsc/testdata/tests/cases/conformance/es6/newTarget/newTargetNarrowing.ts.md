__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 16,
                "end": 20
              },
              "start": 16,
              "end": 20
            },
            "start": 14,
            "end": 20
          },
          "start": 13,
          "end": 20
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 22,
        "end": 25
      },
      "expression": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
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
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "new",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 51
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 58
                  },
                  "start": 48,
                  "end": 58
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "marked",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 65
                },
                "optional": false,
                "computed": false,
                "start": 48,
                "end": 65
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 70,
                "end": 74
              },
              "start": 48,
              "end": 74
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 85
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 86,
                            "end": 89
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 96
                          },
                          "start": 86,
                          "end": 96
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "marked",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 103
                        },
                        "optional": false,
                        "computed": false,
                        "start": 86,
                        "end": 103
                      }
                    ],
                    "optional": false,
                    "start": 82,
                    "end": 104
                  },
                  "directive": null,
                  "start": 82,
                  "end": 105
                }
              ],
              "start": 76,
              "end": 109
            },
            "alternate": null,
            "start": 44,
            "end": 109
          }
        ],
        "start": 40,
        "end": 111
      },
      "expression": false,
      "start": 27,
      "end": 111
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "marked",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 121
          },
          "optional": false,
          "computed": false,
          "start": 113,
          "end": 121
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 124,
          "end": 128
        },
        "start": 113,
        "end": 128
      },
      "directive": null,
      "start": 113,
      "end": 129
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 129
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 27,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "marked",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 66,
    "end": 69
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 86,
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
    "value": "target",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "marked",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
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
    "type": "Identifier",
    "value": "f",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "marked",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  }
]
```
