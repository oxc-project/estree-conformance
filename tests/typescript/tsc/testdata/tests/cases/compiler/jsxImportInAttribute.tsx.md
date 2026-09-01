__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "Test",
        "raw": "\"Test\"",
        "start": 15,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Text",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 50
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 51,
                "end": 54
              },
              "abstract": false,
              "declare": false,
              "start": 40,
              "end": 54
            },
            "exportKind": "value",
            "start": 25,
            "end": 54
          }
        ],
        "start": 22,
        "end": 56
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 56
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 57
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
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"Test\"",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 32,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Text",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 51
          },
          "start": 47,
          "end": 51
        }
      ],
      "source": {
        "type": "Literal",
        "value": "Test",
        "raw": "'Test'",
        "start": 57,
        "end": 63
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 64
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
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 78
          },
          "definite": false,
          "start": 70,
          "end": 78
        }
      ],
      "declare": false,
      "start": 66,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "anything",
            "start": 104,
            "end": 112
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "attr",
                "start": 113,
                "end": 117
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 123
                },
                "start": 118,
                "end": 124
              },
              "start": 113,
              "end": 124
            }
          ],
          "selfClosing": true,
          "start": 103,
          "end": 127
        },
        "children": [],
        "closingElement": null,
        "start": 103,
        "end": 127
      },
      "directive": null,
      "start": 103,
      "end": 128
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 40,
  "end": 133
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 40,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 47,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 52,
    "end": 56
  },
  {
    "type": "String",
    "value": "'Test'",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "Test",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104
  },
  {
    "type": "JSXIdentifier",
    "value": "anything",
    "start": 104,
    "end": 112
  },
  {
    "type": "JSXIdentifier",
    "value": "attr",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  }
]
```
