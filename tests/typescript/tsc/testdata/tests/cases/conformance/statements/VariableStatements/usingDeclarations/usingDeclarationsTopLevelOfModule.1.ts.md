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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 13,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    },
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
            "start": 29,
            "end": 30
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "exportKind": "value",
          "start": 29,
          "end": 30
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 33
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
            "start": 41,
            "end": 42
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
                    "start": 48,
                    "end": 54
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 62
                  },
                  "optional": false,
                  "computed": false,
                  "start": 48,
                  "end": 62
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
                    "start": 66,
                    "end": 68
                  },
                  "expression": false,
                  "start": 63,
                  "end": 68
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 47,
                "end": 68
              }
            ],
            "start": 45,
            "end": 70
          },
          "definite": false,
          "start": 41,
          "end": 70
        }
      ],
      "declare": false,
      "start": 35,
      "end": 71
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 83,
            "end": 84
          },
          "definite": false,
          "start": 79,
          "end": 84
        }
      ],
      "declare": false,
      "start": 73,
      "end": 85
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "init": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 104,
              "end": 105
            },
            "definite": false,
            "start": 100,
            "end": 105
          }
        ],
        "declare": false,
        "start": 94,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 87,
      "end": 106
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 4,
        "raw": "4",
        "start": 123,
        "end": 124
      },
      "exportKind": "value",
      "start": 108,
      "end": 125
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 134
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 138
          },
          "optional": false,
          "computed": false,
          "start": 127,
          "end": 138
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 140
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          }
        ],
        "optional": false,
        "start": 127,
        "end": 150
      },
      "directive": null,
      "start": 127,
      "end": 151
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 151
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 87,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "w",
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
    "type": "Numeric",
    "value": "3",
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
    "value": "export",
    "start": 108,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 115,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 135,
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
    "value": "w",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 148,
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
  }
]
```
