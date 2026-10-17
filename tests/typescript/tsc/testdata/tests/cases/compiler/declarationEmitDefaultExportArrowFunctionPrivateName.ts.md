__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "brand",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 28,
                  "end": 34
                },
                "start": 21,
                "end": 34
              },
              "start": 19,
              "end": 34
            },
            "start": 14,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 34
        }
      ],
      "declare": true,
      "start": 0,
      "end": 35
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 46
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "brand",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 69,
              "end": 70
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 51,
            "end": 71
          }
        ],
        "start": 47,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 37,
      "end": 73
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 98
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
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 119
                },
                "typeArguments": null,
                "arguments": [],
                "start": 112,
                "end": 121
              },
              "start": 105,
              "end": 122
            }
          ],
          "start": 101,
          "end": 124
        },
        "expression": false,
        "start": 82,
        "end": 124
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 75,
      "end": 124
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 125
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "brand",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 21,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 37,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "brand",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 75,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "makeFoo",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 105,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 116,
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
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "makeFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "makeFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "importKind": "value",
          "start": 9,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./helper",
        "raw": "'./helper'",
        "start": 24,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "makeFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 65
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 58,
          "end": 67
        },
        "id": null,
        "generator": false,
        "start": 52,
        "end": 67
      },
      "exportKind": "value",
      "start": 37,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
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
    "value": "makeFoo",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23
  },
  {
    "type": "String",
    "value": "'./helper'",
    "start": 24,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 55,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "makeFoo",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  }
]
```
