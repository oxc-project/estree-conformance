__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              },
              "start": 26,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 23,
          "end": 31
        }
      ],
      "declare": true,
      "start": 11,
      "end": 32
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 100
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
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 111
                  },
                  "start": 107,
                  "end": 111
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 118,
                "end": 120
              },
              "abstract": false,
              "declare": false,
              "start": 107,
              "end": 120
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 103,
            "end": 120
          }
        ],
        "start": 101,
        "end": 122
      },
      "abstract": false,
      "declare": false,
      "start": 93,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 123
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 19,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Identifier",
    "value": "D",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 108,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  }
]
```
