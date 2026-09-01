__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Clazz",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 38
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
                  "start": 41,
                  "end": 44
                },
                "expression": false,
                "start": 38,
                "end": 44
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 25,
              "end": 44
            }
          ],
          "start": 19,
          "end": 46
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 46
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Clazz",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 53
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 60
            },
            "optional": false,
            "computed": false,
            "start": 48,
            "end": 60
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 65
          },
          "optional": false,
          "computed": false,
          "start": 48,
          "end": 65
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 68,
          "end": 69
        },
        "start": 48,
        "end": 69
      },
      "directive": null,
      "start": 48,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Clazz",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 25,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Clazz",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  }
]
```
