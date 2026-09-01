__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
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
              "start": 30,
              "end": 32
            },
            "expression": false,
            "start": 17,
            "end": 32
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 53
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 58,
                          "end": 59
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 61
                        },
                        "optional": false,
                        "computed": false,
                        "start": 58,
                        "end": 61
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 58,
                      "end": 63
                    },
                    "directive": null,
                    "start": 58,
                    "end": 64
                  }
                ],
                "start": 55,
                "end": 67
              },
              "expression": false,
              "start": 43,
              "end": 67
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 36,
            "end": 67
          }
        ],
        "start": 12,
        "end": 114
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 114
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "optional": false,
          "computed": false,
          "start": 116,
          "end": 119
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 116,
        "end": 121
      },
      "directive": null,
      "start": 116,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 17,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  }
]
```
