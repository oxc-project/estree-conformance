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
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 12
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
    "value": "D",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11
  }
]
```
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
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 29,
                    "end": 30
                  },
                  "init": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 33,
                    "end": 37
                  },
                  "definite": false,
                  "start": 29,
                  "end": 37
                }
              ],
              "declare": false,
              "start": 25,
              "end": 38
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 38
          }
        ],
        "start": 12,
        "end": 40
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 42
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "optional": false,
        "computed": false,
        "start": 41,
        "end": 44
      },
      "directive": null,
      "start": 41,
      "end": 45
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 45
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
    "value": "D",
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
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 25,
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
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  }
]
```
