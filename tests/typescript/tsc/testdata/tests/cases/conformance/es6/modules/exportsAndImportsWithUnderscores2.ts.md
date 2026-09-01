__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "R",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              },
              "start": 5,
              "end": 10
            },
            "start": 4,
            "end": 10
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 27
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "__esmodule",
                "raw": "\"__esmodule\"",
                "start": 36,
                "end": 48
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 50,
                "end": 54
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 36,
              "end": 54
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "__proto__",
                "raw": "\"__proto__\"",
                "start": 60,
                "end": 71
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 73,
                "end": 75
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 60,
              "end": 75
            }
          ],
          "start": 30,
          "end": 77
        },
        "start": 26,
        "end": 77
      },
      "exportKind": "value",
      "start": 11,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 18,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "String",
    "value": "\"__esmodule\"",
    "start": 36,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"__proto__\"",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
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
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./m1",
        "raw": "\"./m1\"",
        "start": 14,
        "end": 20
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__esmodule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 40
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__esmodule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 40
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 30,
                "end": 40
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__proto__",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 51
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__proto__",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 51
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 51
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 53
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "definite": false,
          "start": 28,
          "end": 57
        }
      ],
      "declare": false,
      "start": 22,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
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
    "type": "Identifier",
    "value": "R",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"./m1\"",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "__esmodule",
    "start": 30,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "__proto__",
    "start": 42,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  }
]
```
