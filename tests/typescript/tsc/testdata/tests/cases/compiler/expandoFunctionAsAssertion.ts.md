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
        "name": "example",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 19,
        "end": 21
      },
      "expression": false,
      "start": 0,
      "end": 21
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
            "name": "example",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 30
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 36
          },
          "optional": false,
          "computed": false,
          "start": 23,
          "end": 36
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 61,
                  "end": 67
                },
                "start": 59,
                "end": 67
              },
              "start": 54,
              "end": 67
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypePredicate",
              "parameterName": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 83
              },
              "asserts": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 87,
                    "end": 92
                  },
                  "start": 87,
                  "end": 92
                },
                "start": 87,
                "end": 92
              },
              "start": 70,
              "end": 92
            },
            "start": 68,
            "end": 92
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 106
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 111,
                    "end": 116
                  },
                  "start": 101,
                  "end": 116
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 134,
                          "end": 139
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Not foo",
                            "raw": "'Not foo'",
                            "start": 140,
                            "end": 149
                          }
                        ],
                        "start": 130,
                        "end": 150
                      },
                      "start": 124,
                      "end": 151
                    }
                  ],
                  "start": 118,
                  "end": 155
                },
                "alternate": null,
                "start": 97,
                "end": 155
              }
            ],
            "start": 93,
            "end": 157
          },
          "expression": false,
          "start": 39,
          "end": 157
        },
        "start": 23,
        "end": 157
      },
      "directive": null,
      "start": 23,
      "end": 158
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
            "name": "example",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 167
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 173
          },
          "optional": false,
          "computed": false,
          "start": 160,
          "end": 173
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "test",
            "raw": "'test'",
            "start": 174,
            "end": 180
          }
        ],
        "optional": false,
        "start": 160,
        "end": 181
      },
      "directive": null,
      "start": 160,
      "end": 182
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 182
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
    "value": "example",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 39,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "asserts",
    "start": 70,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 84,
    "end": 86
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 87,
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
    "value": "if",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 107,
    "end": 110
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 124,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "String",
    "value": "'Not foo'",
    "start": 140,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  }
]
```
