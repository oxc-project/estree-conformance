__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exportKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 13
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 34
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 42
                  },
                  "optional": false,
                  "computed": false,
                  "start": 28,
                  "end": 42
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
                    "body": [],
                    "start": 46,
                    "end": 48
                  },
                  "expression": false,
                  "start": 43,
                  "end": 48
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 27,
                "end": 48
              }
            ],
            "start": 25,
            "end": 50
          },
          "definite": false,
          "start": 21,
          "end": 50
        }
      ],
      "declare": false,
      "start": 15,
      "end": 51
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 57,
        "end": 62
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 78,
                  "end": 79
                },
                "definite": false,
                "start": 74,
                "end": 79
              }
            ],
            "declare": false,
            "start": 70,
            "end": 80
          }
        ],
        "start": 64,
        "end": 82
      },
      "alternate": null,
      "start": 53,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 110
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 114
                },
                "optional": false,
                "computed": false,
                "start": 103,
                "end": 114
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 116
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 119
                }
              ],
              "optional": false,
              "start": 103,
              "end": 120
            },
            "directive": null,
            "start": 103,
            "end": 121
          }
        ],
        "start": 97,
        "end": 123
      },
      "expression": false,
      "start": 84,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 124
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 57,
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
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  }
]
```
